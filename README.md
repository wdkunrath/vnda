# vnda
Teste para a vaga de front Vnda

Para o teste foi solicitado:

- Paleta de cores: https://coolors.co/ffffff-f6f6f6-f5e5d9-272727-000000
- Fontes: Playfair Display e PT Sans
- O wireframe representa o layout macro do site, você tem liberdade para escolher os espaçamentos, tamanho de fontes, uso   das cores, efeitos e outros detalhes.
- Para as imagens, pode ser usado gerdores de imagens por dimensão, como o picsum e o placeholder
- No banner principal deve haver um slider, usar um desses plugins: slick, swiper
- Deve ser feito o responsivo, mantendo as mesmas sessões do desktop. Você tem liberdade para decidir os pontos de quebra   e o estilo das sessões no mobile.
- Você tem total liberdade para criar efeitos nas sessões do site, explore o artista dentro de você hehehe;
- O envio deve ser feito através dos arquivos zipados ou no github;
- Deve ser utilizado sass e gulp para o pré-processamento do código;
- Entregar uma pasta com os arquivos de desenvolvimento e outra pasta com os arquivos minificados e comprimidos(src/dist);
    -- Na pasta src ficam os arquivos de desenvolvimento.
    -- Na pasta dist ficam os arquivos finais (comprimidos e minificados).
- Não deve ser usado nenhum framework de css (como bootstrap), para que possamos avaliar melhor a sua qualidade técnica;

Prazo estipulado por mim 3 dias. Foram trabalhados 4 horas por dia todos os dias. Após entrega percebi que podia inicializar o arquivo index na porta 8080 junto ao comando gulp, é pois é ratiei porém subi assim mesmo no github após entrega.

Para produção era necessario ter o node.js instalado. 

versão utilizada foi a estavel até o momento de 07/2019
v10.16.0

Estrutura:

    |- vnda/
    |- dist/
    |- src/
        |- font/
        |- img/
        |- js/
        |- scss/
        style.scss
    index.html
    .gitignore
    gulpfile.js
    package.json

Comodandos utilizados:
    $ npm install --global gulp-cli
    $ npm init
    $ npm install --save-dev gulp
    $ npm install --save-dev gulp-sass
    $ npm install --save-dev browser-sync gulp 

Após execução configuração de gulpfile.js

Comando para execução:

    - git clone https://github.com/wdkunrath/vnda.git
    - npm install
    - gulp

