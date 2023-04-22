function getAllUsers() {
  fetch('http://localhost:3000/datas')
    .then((res) => res.json())
    .then((res) => {
      const p = document.createElement('p');

      p.textContent = res.data;
      document.body.appendChild(p);
    });
}

function getUser() {
  const input = document.createElement('input');
  const submit = document.createElement('button');
  submit.textContent = 'Buscar';
  input.placeholder = "Nome"
  buttonGetOne.disabled = true;
  document.body.appendChild(input);
  document.body.appendChild(submit);

  submit.addEventListener('click', () => {
    fetch(`http://localhost:3000/datas/${input.value}`)
      .then((res) => res.json())
      .then((res) => {
        const p = document.createElement('p');
        p.textContent = res.user;
        document.body.appendChild(p);
        buttonGetOne.disabled = false;
        document.body.removeChild(input);
        document.body.removeChild(submit);
      });
  });
}
function addUser() {
  const input = document.createElement('input');
  const submit = document.createElement('button');
  input.placeholder = "Nome"
  submit.textContent = 'Adicionar';
  buttonAddUser.disabled = true;
  document.body.appendChild(input);
  document.body.appendChild(submit);
  submit.addEventListener('click', () => {
    const user = {
      name: input.value,
    };

    fetch(`http://localhost:3000/datas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        const p = document.createElement('p');
        p.textContent = res.message;
        document.body.appendChild(p);
        buttonAddUser.disabled = false;
        document.body.removeChild(input);
        document.body.removeChild(submit);
      });
  });
}

const buttonGetAll = document.querySelector('.get-all');
const buttonGetOne = document.querySelector('.get-one');
const buttonAddUser = document.querySelector('.add-user');

buttonGetAll.addEventListener('click', getAllUsers);
buttonGetOne.addEventListener('click', getUser);
buttonAddUser.addEventListener('click', addUser);
