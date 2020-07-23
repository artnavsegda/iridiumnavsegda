var IR = {SetTimeout: function(delay, callback){}, Log: function(text){}}

function delay(ms: number) {
  return new Promise<void>(function(resolve) {
    IR.SetTimeout(ms, resolve);
  });
}

async function asyncAwait() {
  IR.Log("Knock, knock!");

  await delay(1000);
  IR.Log("Who's there?");

  await delay(1000);
  IR.Log("async/await!");
}

asyncAwait();
