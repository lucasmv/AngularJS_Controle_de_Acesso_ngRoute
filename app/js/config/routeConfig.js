angular.module('myApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
        .when('/livros', {
            templateUrl: 'view/livros.html',
            controller: 'livroController'
        })
        .when('/login', {
            templateUrl: 'view/login.html',
            controller: 'loginController'
        })
        .when('/usuarios', {
            templateUrl: 'view/usuarios.html',
            controller: 'usuariosController'
        })
        .when('/acessoNegado', {
            templateUrl: 'view/acessoNegado.html',
            controller: 'acessoNegadoController'
        })
        .otherwise({ redirectTo: '/home'});
})
//Não sei se isso ficaria aqui
.run(function ($rootScope, $location) {
 
    //Rotas que necessitam do login
    var rotasBloqueadasUsuariosNaoLogados = ['/usuarios', '/livros'];
    var rotasBloqueadasUsuariosComuns = ['/usuarios'];

    //iremos chamar essa função sempre que o endereço for alterado
    $rootScope.$on('$locationChangeStart', function () { 
   
        /*  podemos inserir a logica que quisermos para dar ou não permissão ao usuário.
            Neste caso, vamos usar uma lógica simples. Iremos analisar se o link que o usuário está tentando acessar (location.path())
            está no Array (rotasBloqueadasUsuariosNaoLogados) caso o usuário não esteja logado. Se o usuário estiver logado, iremos
            validar se ele possui permissão para acessar os links no Array de strings 'rotasBloqueadasUsuariosComuns'
        */
   
        if ($rootScope.usuarioLogado == null && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1) {
            $location.path('/acessoNegado');
   
        } else
            if ($rootScope.usuarioLogado != null &&
                 rotasBloqueadasUsuariosComuns.indexOf($location.path()) != -1 &&
                 $rootScope.usuarioLogado.admin == false){
            $location.path('/acessoNegado')
        }
    });
  });