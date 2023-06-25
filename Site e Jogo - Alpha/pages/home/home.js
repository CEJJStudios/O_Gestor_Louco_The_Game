function logout(event) {
    event.stopPropagation(); // Impede a propagação do evento de clique
  
    firebase.auth().signOut().then(() => {
      window.location.href = "../../index.html";
    }).catch(() => {
      alert('Erro ao fazer logout');
    });
  }