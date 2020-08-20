import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  team = [
    {
      title: 'La justice',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: "L'éducation",
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: "L'agriculture",
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: "L'environnement",
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: 'La santé',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      title: 'Le plan de protection sociale',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ',
    },
    {
      title: 'Forces de défenses et sécurité',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ',
    },
    {
      title: 'Les infrastructures et les TP',
      pdfUrl: 'assets/pdf/DRG_plan_de_protection_sociale.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ',
    },
  ];

  pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor() {}

  ngOnInit(): void {}
}
