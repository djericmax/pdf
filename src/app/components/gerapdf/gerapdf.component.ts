import { Component, OnInit } from '@angular/core';
import { Canvas, Img, PdfMakeWrapper, Polyline, TextReference, Toc, TocItem, Txt } from 'pdfmake-wrapper';


@Component({
  selector: 'app-gerapdf',
  templateUrl: './gerapdf.component.html',
  styleUrls: ['./gerapdf.component.scss']
})
export class GerapdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gerarPDFdownload(){
    const pdfD = new PdfMakeWrapper();

    pdfD.pageSize('A4');

    // pdfD.pageSize({
    //   width: 500.28,
    //   height: 'auto'
    // });

    // pdfP.pageMargins([ L, T, B, R ]);
    pdfD.pageMargins([ 50, 80, 20, 20 ]);

    pdfD.add(
      new Txt(
        'Aqui vai o título do PDF, e as propriedades a frente são de configuração'
        ).bold().color('#cf9').italics().fontSize(24).end
    );

    pdfD.add( pdfD.ln(2) );

    pdfD.add( ['Primeiro item','Segundo item','Terceiro item'] );

    pdfD.add( pdfD.ln(2) );

    // pdfD.add( new Img(
    //   'https://e-xyon.com.br/sites/default/files/logo.png'
    //   ).build()
    // );

    pdfD.add(
      new Canvas([
          new Polyline([
              { x: 10, y: 10 },
              { x: 35, y: 40 },
              { x: 100, y: 40 },
              { x: 125, y: 10 }
          ]).closePath().end
      ]).end
    );

    // adding points
    pdfD.add(
        new Canvas([
            new Polyline()
                .closePath()
                .addPoint(10, 10)
                .addPoint(35, 40)
                .addPoint(100, 40)
                .addPoint(125, 10)
                .end
        ]).end
    );

    pdfD.add( new TextReference('Título 01').end );
    pdfD.add( new TextReference('Título 02').end );


    pdfD.add( new Txt('Este é o texto de referência na página 1.').pageBreak('before').id('Título 01').end );

    pdfD.add( pdfD.ln(1) );

    pdfD.add(
      new Toc(
          new Txt('Índice página 01').bold().end
      ).textStyle({ italics: true }).end
    );

    pdfD.add( new Txt('Este é o texto de referência na página 2').pageBreak('before').id('Título 02').end );

    pdfD.create().download();

  }

   gerarPDFpagina(){
    const pdfP = new PdfMakeWrapper();

    pdfP.pageSize('A4');

    // pdfP.pageSize({
    //   width: 500.28,
    //   height: 'auto'
    // });

    // pdfP.pageMargins([ L, T, B, R ]);
    pdfP.pageMargins([ 50, 80, 20, 20 ]);

    pdfP.add(
      new Txt(
        'Aqui vai o título do PDF, e as propriedades a frente são de configuração'
        ).bold().color('#cf9').italics().fontSize(24).end
    );

    pdfP.add( pdfP.ln(2) );

    pdfP.add( ['Primeiro item','Segundo item','Terceiro item'] );

    pdfP.add( pdfP.ln(2) );

    // pdfP.add( new Img(
    //   'https://e-xyon.com.br/sites/default/files/logo.png'
    //   ).build()
    // );

    pdfP.add(
      new Canvas([
          new Polyline([
              { x: 10, y: 10 },
              { x: 35, y: 40 },
              { x: 100, y: 40 },
              { x: 125, y: 10 }
          ]).closePath().end
      ]).end
    );

    // adding points
    pdfP.add(
        new Canvas([
            new Polyline()
                .closePath()
                .addPoint(10, 10)
                .addPoint(35, 40)
                .addPoint(100, 40)
                .addPoint(125, 10)
                .end
        ]).end
    );

    pdfP.add( new TextReference('Título 01').end );
    pdfP.add( new TextReference('Título 02').end );


    pdfP.add( new Txt('Este é o texto de referência na página 1.').pageBreak('before').id('Título 01').end );

    pdfP.add( pdfP.ln(1) );

    pdfP.add(
      new Toc(
          new Txt('Índice página 01').bold().end
      ).textStyle({ italics: true }).end
    );

    pdfP.add( new Txt('Este é o texto de referência na página 2').pageBreak('before').id('Título 02').end );

    pdfP.create().open();
  }

}
