import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
    providedIn: 'root'
  })
  export class ScriptListasService {

    /* footable */
    criarFooTable() {
        $(document).ready(function() {
            $('.footable').footable();
            $('.footable2').footable();
        });
    }

  } // end class
