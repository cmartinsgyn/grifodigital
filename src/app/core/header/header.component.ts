import { Component } from '@angular/core';
import { UserService } from '../../seguranca/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../seguranca/user/user';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;
    user: User;

    constructor(
        private userService: UserService,
        private router: Router) {

        // A boa pratica diz para colocar $ indicando que
        // o atributo/variável armazena um valor de observable
        this.user$ = userService.getUser();
        // Me escrevo no observable para pegar um valor
        this.user$.subscribe(user => this.user = user);
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
