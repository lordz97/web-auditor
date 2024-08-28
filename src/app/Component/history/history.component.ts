/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/audit.service';
import { Audit } from 'src/app/shared/audit';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  inconnu: unknown
  toggle = false
  audit:Audit = {
    app_name: '',
    app_url: '',
    date: '',
    auditor: ''
  }
  audits:Audit[]=[]
  auditor = sessionStorage.getItem("nom")+" "+sessionStorage.getItem("prenom")
  constructor(private auditService: AuditService) { }
  ngOnInit(): void {
    this.auditService.getAuditByName(this.auditor).subscribe({next: (audits:Audit[])=> {this.audits = audits; this.dataSource=this.audits
    },error:console.error})
  }
  
  displayedColumns: string[] = ['audit_id', 'app_name', 'app_url', 'date', 'auditor'];
  dataSource = ELEMENT_DATA;
  result(id: number){
    this.audit = <Audit>this.audits.find(audit => audit.audit_id == id)
    console.log(this.audit)
    this.toggle =true
  }
}
const ELEMENT_DATA: unknown[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
];
