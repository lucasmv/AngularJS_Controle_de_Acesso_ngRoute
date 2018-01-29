angular.module("myApp", "").service('usuariosService', function ($rootScope, $location) {
    /*Esta função faz o papel de validação que seria feito no backend */
    this.validaLogin = function(user){
   
        //usuários fictícios que possam ser usados pela página e pra validar o login
        var usuarios = [
            {id: 1, username:'lucas', password:'123', admin:true},
            {id: 2, username:'Juliano', password:'123', admin:false},
            {id: 3, username:'Bruno', password:'123', admin:false}
        ];
   
        //Nesse trecho, um for para validar o login
        angular.forEach(usuarios, function(value, index) {
            if(value.username === user.username && value.password === user.password) {
                delete value.password;
                $rootScope.usuarioLogado = value;
                $location.path('/home')
            } 
        });

        if($rootScope.usuarioLogado == null)
            alert('Login ou Senha inválido!');
    };

    this.logout = function(){
        $rootScope.usuarioLogado = null;
        $location.path('/home')
    };

    this.getUsers = function(){
        return [
            {id: 1, nome:'Lucas', admin:true},
            {id: 2, nome:'Juliano', admin:false},
            {id: 3, nome:'Bruno', admin:false}
        ]
    }
  });

angular.module("myApp", "").service('livrosService', function () {
    //busca livros
    this.getLivros = function(){
        return [
            {id: 1, nome:'Como Eu Era Antes de Você', autor:'Jojo Moyes'},
            {id: 2, nome:'A sereia', autor:'Kiera Cass'},
            {id: 3, nome:'Belo Sacrifício - Irmãos Maddox', autor:'Jamie McGuire'}
        ];
    }
})