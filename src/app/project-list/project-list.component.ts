import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '@app/@shared/dialog-modal/dialog-modal.component';
import {
  faUsers,
  faGraduationCap,
  faStethoscope,
  faTractor,
  faBalanceScale,
  faShieldAlt,
  faGlobeAfrica,
  faMedkit,
  faRoad,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  team = [
    {
      title: "L'éducation",
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      icon: faGraduationCap,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: 'La santé',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      icon: faStethoscope,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },

    {
      title: "L'agriculture",
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      icon: faTractor,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: 'La justice',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      icon: faBalanceScale,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: 'Les infrastructures et les travaux publics',
      icon: faRoad,
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ',
    },

    {
      title: 'Le plan de protection sociale',
      icon: faMedkit,
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ',
    },
    {
      title: 'Forces de défenses et sécurité',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      icon: faShieldAlt,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ',
    },
    {
      title: "L'environnement",
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      icon: faGlobeAfrica,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  ];

  pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
