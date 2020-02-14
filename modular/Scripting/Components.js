// Unit: Script 1

function FancyButton(parent, name, x, y, w, h, callback) {
  var basebutton = parent.CreateItem(IR.ITEM_BUTTON,name + "_base",x-10,y-10,w+20,h+20);
  basebutton.GetState(0).Color = 0xFF0000FF;
  var innerbutton = parent.CreateItem(IR.ITEM_BUTTON,name + "_inner",x,y,w,h);
  var gesturemask = parent.CreateItem(IR.ITEM_BUTTON,name + "_mask",x,y,w,h);
  gesturemask.GetState(0).Color = 0xFF00007F;
  innerbutton.Text = name;

  IR.AddListener(IR.EVENT_ITEM_RELEASE, innerbutton, function() {
    IR.Log(name + " fancy button pushed");
    callback();
  });

  function move(newx,newy) {
    IR.Log("moveing " + name + " to " + newx + " " + newy);
    basebutton.X = basebutton.X - newx;
    basebutton.Y = basebutton.Y - newy;
    innerbutton.X = innerbutton.X - newx;
    innerbutton.Y = innerbutton.Y - newy;
  }
  this.move = move;
  this.basebutton = basebutton;
  this.innerbutton = innerbutton;
  this.gesturemask = gesturemask;

    var deltax,deltay;

    IR.AddListener(IR.EVENT_MOUSE_DOWN, gesturemask, function ()
    {
      IR.Log("CLICK1");
      deltax = 0;
      deltay = 0;
    });

    IR.AddListener(IR.EVENT_MOUSE_UP, gesturemask, function ()
    {
      gesturemask.X = innerbutton.X;
      gesturemask.Y = innerbutton.Y;
    });

    IR.AddListener(IR.EVENT_MOUSE_MOVE, gesturemask, function (x, y)
    {
      IR.Log(x + ":" + y); // new coordinates on move
      if (deltax == 0 && deltay == 0)
      {
         deltax=x;
         deltay=y;
      }
      else
      {
         IR.Log("delta: " + (deltax-x) + ":" + (deltay-y)); // new coordinates on move
         move(deltax-x,deltay-y);
         deltax=x;
         deltay=y;
      }
    });
}

function FancyContainer(parent, name, x, y) {
  var baseContainer = parent.CreateItem(IR.ITEM_BUTTON,name + "_C",x,y,400,200);
  var myContainerButton = new FancyButton(parent, name + "_CF", x+50, y+50, 100, 100, function(){IR.Log("one container button cb")});
  var myAnotherContainerButton = new FancyButton(parent, name + "_CS", x+250, y+50, 100, 100, function(){IR.Log("two container button cb")});
}

IR.AddListener(IR.EVENT_START,0, function()
{
    var myButton = new FancyButton(IR.GetItem("Page 1"), "Button", 150, 150, 100, 100, function(){IR.Log("one button cb")});
    var myAnotherButton = new FancyButton(IR.GetItem("Page 1"), "Nottub", 550, 170, 150, 100, function(){IR.Log("two button cb")});
    var myContainer = FancyContainer(IR.GetItem("Page 1"), "MC", 50, 450);
    var myContainer = FancyContainer(IR.GetItem("Page 1"), "MOC", 550, 400);
});

IR.AddListener(IR.EVENT_EXIT, 0, function () {

});
