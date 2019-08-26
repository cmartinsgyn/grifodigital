import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptHomeService } from './script-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private scriptHome: ScriptHomeService
    ) { }

  ngOnInit() {
    this.addJsToElement('assets/js/demo/morris-demo.js').onload = (teste) => {
      console.log(teste);
  };
  this.scriptHome.popularGraficoHome();
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}
