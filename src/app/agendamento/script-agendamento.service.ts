import { Injectable } from '@angular/core';

declare var $: any;


@Injectable({
    providedIn: 'root'
})
export class ScriptService {
    public calendar: any;
    public start: any;
    public end: any;
    public eventos: any[];

    /* footable */
    criarFooTable() {
        $(document).ready(function () {
            $('.footable').footable();
            $('.footable2').footable();
        });
    }

     /* calendário */

    addEvent(titulo: string) {
        const evento = {
            title: titulo,
            start: this.start,
            end: this.end,
            allDay: true
        };
        this.calendar.fullCalendar('renderEvent', evento, true);
        this.calendar.fullCalendar('unselect');
    }

    fecharModal() {
        $('#addEvent').hide();
    }

    criarCalendar() {

        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green'
        });

        /* initialize the external events
         -----------------------------------------------------------------*/
        $('#external-events div.external-event').each(function () {
            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use o texto do elemento como o título do evento
                stick: true // manter quando o usuário navega (consulte os documentos no método renderEvent)
            });

            // Tornar o evento draggable usando jQuery UI
            $(this).draggable({
                zIndex: 1111999,
                revert: true,      // fará com que o evento volte a sua
                revertDuration: 0  //  posição original após o arrasto
            });
        });

        /* inicializar o calendar
         -----------------------------------------------------------------*/
        // tslint:disable-next-line:no-shadowed-variable

        const _self = this;
        this.calendar = $('#calendar').fullCalendar({
            plugins: ['interaction', 'dayGrid', 'timeGrid'],
            selectable: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            // dateClick: function (info) {
            //     alert('clicked ' + info.dateStr);
            // },
            select: function (start, end, ev) {
                _self.start = start;
                _self.end = end;

                $('#addEvent').show();
            },
            editable: false,
            droppable: true, // isso permite que as coisas saiam no calendário
            drop: function () {
                // a caixa de seleção "remover após soltar" está marcada?
                if ($('#drop-remove').is(':checked')) {
                    // Em caso afirmativo, remova o elemento da lista "Eventos arrastáveis".
                    $(this).remove();
                }
            },
            /* Dados do calendário*/
            events: _self.eventos


        });

    }
}
