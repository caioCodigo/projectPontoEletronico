const app = angular.module('pontos',[]);

app.controller('PontoController',($scope) => {
    

    $scope.pontos =
    [
        {
            entrada:"13:00",
            intervaloA:"14:00",
            intervaloB:"16:00",
            saida:"18:00",
            total:"seila"
        },
        {
            entrada:"09:00",
            intervaloA:"10:00",
            intervaloB:"12:00",
            saida:"13:00",
            total:"seila2"
        },{
            entrada:"04:00",
            intervaloA:"14:00",
            intervaloB:"19:00",
            saida:"23:00",
            total:"seila3"
        }
    ];

    $scope.opcoes =
    [
        {
           mes : "janeiro"
        },
        
        {
            mes : "Fevereiro"           
        },

        {
            mes : "Março"           
        },

        {
            mes : "Abril"            
        },

        {
            mes : "Maio"
        },

        {
            mes : "Junho"           
        },

        {
            mes : "Julho"           
        },

        {
            mes : "Agosto"           
        },

        {
            mes : "Setembro"           
        },

        {
            mes: "Outubro"   
        },

        {
            mes : "Novembro"           
        },

        {
            mes : "Dezembro"           
        }


    ];
});