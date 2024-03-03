exports.getAllCategories = async (req, res) => {
    res.send('Voici la liste des catégories');
};

exports.createCategory = (req, res) => {
    if (req.method === 'GET') {
        res.send('Voici le formulaire d\'ajout d\'une catégorie!');
    } else if (req.method === 'POST') {
        res.send('Catégorie ajoutée');
    }
  };
exports.updateCategory = async (req, res) => {
    if (req.method === 'GET') {
        res.send('Voici le formulaire de modification d\'une catégorie!');
    } else if (req.method === 'POST') {
      res.send('Catégorie mise à jour avec succès');
    }
};

exports.deleteCategory = async (req, res) => {
    res.send('Voici la suppression d\'une catégorie');
};