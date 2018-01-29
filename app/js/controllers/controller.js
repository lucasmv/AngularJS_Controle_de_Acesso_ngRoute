angular.module("myApp", "").controller('pageController', function ($scope, usuariosService) {
     $scope.logout = function(){
        console.log(usuariosService);
          usuariosService.logout();
      };

    $scope.usuarioEstaLogado = function(usuarioLogado) {
        if(usuarioLogado)
            return true;
        else 
            return false;
    };

    $scope.usuarioAdmin = function(usuarioLogado) {
        if(usuarioLogado)
            return usuarioLogado.admin == true;
        else 
            return false;  
    }
});

angular.module("myApp", "").controller('homeController', function ($scope) {
 
});

angular.module("myApp", "").controller('livroController', function ($scope, livrosService) {   
    $scope.livros = livrosService.getLivros();

    $scope.excluirLivro = function(livros, livro){
        $scope.livros = livros.filter(function(el) { 
            return el.id != livro.id; 
        });
    };
});

angular.module("myApp", "").controller('loginController', function ($scope, usuariosService) {
    $scope.logar = function(user){
        usuariosService.validaLogin(user);
    }
});

angular.module("myApp", "").controller('usuariosController', function ($scope, $rootScope, usuariosService) {   
    $scope.usuarios = usuariosService.getUsers();

    $scope.excluirUsuario = function(usuarios, usuario){

        if($rootScope.usuarioLogado.id === usuario.id){
            alert('Esse usuário não poder apagado!');
            return;
        }

        $scope.usuarios = usuarios.filter(function(el){
            return el.id != usuario.id;
        });
    };
});

angular.module("myApp", "").controller('acessoNegadoController', function ($scope) {
 
});