import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as globals from "../globals";

@Component({
    selector: 'help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HelpComponent implements OnInit {
    nav_version: string = globals.nav_version;

    constructor(private dialogRef: MatDialogRef<HelpComponent>,
                @Inject(MAT_DIALOG_DATA) public data) { }

    ngOnInit() {}
}
