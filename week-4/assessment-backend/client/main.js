const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

const cookieBtn = document.getElementById("cookieButton");

const getCookie = () => {
  axios.get("http://localhost:4000/api/cookie/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

cookieBtn.addEventListener('click', getCookie);


const passwordBtn = document.getElementById("passwordButton");

const getPassword = () => {
  axios.get("http://localhost:4000/api/password/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

passwordBtn.addEventListener('click', getPassword);
