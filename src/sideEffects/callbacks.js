const primaryIo = () => new Promise((resolve) => {
  setTimeout(resolve, 700);
});

const secondaryIo = () => new Promise((resolve) => {
  setTimeout(resolve, 300);
});

const errorIo = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error('Bad Error');
  }, 900);
});

async function straight() {
  await primaryIo();
  await secondaryIo();
}

async function withSetImmd() {
  setImmediate(secondaryIo);
  await primaryIo();
}

async function straightError() {
  await primaryIo();
  await errorIo();
}

async function withSetImmdError() {
  setImmediate(errorIo);
  await primaryIo();
}

async function profile() {
  console.time('straight');
  await straight();
  console.timeEnd('straight');

  console.time('withSetImmd');
  await withSetImmd();
  console.timeEnd('withSetImmd');

  // console.time('straightError');
  // await straightError();
  // console.timeEnd('straightError');

  console.time('withSetImmdError');
  await withSetImmdError();
  console.timeEnd('withSetImmdError');

  console.log('-----Complete------');
}


profile();
