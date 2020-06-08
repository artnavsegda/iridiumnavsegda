var List_1;

function OnStart () 
{
   // Create List
   IR.GetItem("Page 1").CreateItem(IR.ITEM_LISTBOX,"List 1", 500, 30, 300, 700); 
   // Get an acces to List 
   List_1 = IR.GetItem("Page 1").GetItem("List 1")
   // Choose the List template (Popup Name)
   List_1.Template = "ListItem";
   
   // Listen when somebody press to Items in List
   IR.AddListener(IR.EVENT_LIST_ITEM_CHANGE, List_1, OnPress);
   
   // Add new item in List_1. Add text to List Item #1, Subitem #2 (text field)
   List_1.CreateItem(0, 2, {Text: "Hello!"});   
   // Add new item in List_1. Add text to List Item #2, Subitem #2 (text field)
   List_1.CreateItem(1, 2, {Text: "Next"});   
      // Add new item in List_1. Add text to List Item #3, Subitem #2 (text field)
   List_1.CreateItem(2, 2, {Text: "item 3"});
}

function Add ()
{
   // count items in list
   var current = List_1.ItemsCount; 
   // create one more item and add the text   
   List_1.CreateItem(current++, 2, {Text: "item "+current++});
}

function Clear ()
{
   // delete all the items in List
   List_1.Clear(); 
}

function OnPress (Item, Subitem, TypeEvent, object)
{
    // check the Type of Event. 11 - Press, 12 - Release, 13 - Move
    if (TypeEvent == 11)
    switch(object.Name)
    {
        case "Item 1":
            IR.Log("List Item: "+Item+" Subitem: "+Subitem+" // Pressed");
            break;
        case "Item 2":
            IR.Log("List Item: "+Item+" Subitem: "+Subitem+" // Pressed");
            break;
    }
}

// Actions on iRidium Start
IR.AddListener(IR.EVENT_START, 0, OnStart)
