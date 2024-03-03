exports.signup = (req, res) => {
    if (req.method === 'GET') {
      res.send('Voici le formulaire d\'inscription !');
    } else if (req.method === 'POST') {
      res.send('Inscription réussie !');
    }
  };
  
  exports.login = (req, res) => {
    if (req.method === 'GET') {
      res.send('Voici le formulaire de connexion !');
    } else if (req.method === 'POST') {
      res.send('Connexion réussie !');
    }
};