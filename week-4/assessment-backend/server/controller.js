module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getCookie: (req, res) => {
    const cookies = ["Go take a rest; you deserve it.", "Happiness begins with facing life with a smile and a wink.", "If you continually give, you will continually have.", "How you look depends on where you go.", "If certainty were truth, we would never be wrong.", "In the end all things will be known.", "It takes courage to admit fault."];

    // choose random cookie
    let randomIndex = Math.floor(Math.random() * cookies.length);
    let randomCookie = cookies[randomIndex];

    res.status(200).send(randomCookie);
  },

    getPassword: (req, res) => {

      // generate random password
    const randomPassword = Math.random().toString(16).substr(2, 8);
    res.status(200).send(randomPassword);
  }

}
