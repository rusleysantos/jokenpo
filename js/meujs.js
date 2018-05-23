var Jogador;
var MaquinaJogada;
var Maquina;
var PlacarJogador =0;
var PlacarMaquina =0;

function Logica(Element) {
    Jogador = Element.getAttribute("value");
    min = Math.ceil(1);
    max = Math.floor(4);
    Maquina = Math.floor(Math.random() * (max - min)) + min;
    
    if (Maquina == 1) 
    {
        MaquinaJogada = "pedra";
    } 
    else if (Maquina == 2) 
    {
        MaquinaJogada = "papel";
    } 
    else if (Maquina == 3) 
    {
        MaquinaJogada = "tesoura";
    }
    //empate
    if(Jogador==MaquinaJogada)
    {
       
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada);
        alert('Resutado: Empate');
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
     //Ganhou
     else if(Jogador=='pedra' && MaquinaJogada=='tesoura')
     {
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada+'.');
        alert("Você ganhou!!!");
        PlacarJogador++;
        
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
    
    else if(Jogador=='papel' && MaquinaJogada=='pedra')
     {
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada+'.');
        alert("Você ganhou!!!");
        PlacarJogador++;
        
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
    
    else if(Jogador=='tesoura' && MaquinaJogada=='papel')
     {
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada+'.');
        alert("Você ganhou!!!");
        PlacarJogador++;
        
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
    
    //Perdeu
    else if(MaquinaJogada=="pedra" && Jogador=="tesoura")
    {
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada+'.');
        alert("Você perdeu!!!");
        PlacarMaquina++;
        
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
    
     else if(MaquinaJogada=="papel" && Jogador=="pedra")
    {
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada+'.');
        alert("Você perdeu!!!");
        PlacarMaquina++;
        
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
    
      else if(MaquinaJogada=="tesoura" && Jogador=="papel")
    {
        alert('Você jogou '+Jogador+' e o computador '+MaquinaJogada+'.');
        alert("Você perdeu!!!");
        PlacarMaquina++;
        
        alert('O seu placar é '+PlacarJogador+' e o placar do computador '+PlacarMaquina+'.');
    }
    
    debugger;
}


    