import { Component } from '@angular/core';

@Component({
  selector: 'classification',
  template: `
    <div>
      <nb-classification-banner 
        acmObject={{acmObject}}
        canSetLevel={{canSetLevel}}
        environment={{environment}}
        position={{position}}
        ></nb-classification-banner>
    </div>
  `
})
export class ClassificationComponent {
  public canSetLevel: boolean = true;
  public environment: string = 'testing';
  public position: string = 'top';
  public acmObject: any[] = [
        {
      "version": "2.1.0",
      "classif": "TS",
      "owner_prod": ["USA"],
      "atom_energy": [],
      "sar_id": [],
      "sci_ctrls": [],
      "disponly_to": [""],
      "dissem_ctrls": ["OC", "NF"],
      "non_ic": [],
      "rel_to": [],
      "declass_ex": "83X1-HUM",
      "fgi_open": [],
      "fgi_protect": [],
      "portion": "TS//OC/NF",
      "banner": "TOP SECRET//ORCON/NOFORN",
      "dissem_countries": ["USA"],
      "accms": [],
      "macs": [{
        "coi": "AUTOBOTS",
        "disp_nm": "AUTOBOTS",
        "coi_ctrls": [{
          "coi_ctrl": "HOTROD",
          "disp_nm": "HOTROD"
        }]
      }],
      "oc_attribs": [{
        "orgs": ["DIA", "DoD_DIA"],
        "missions": [],
        "regions": []
      }],
      "f_clearance": ["ts"],
      "f_sci_ctrls": [],
      "f_accms": [],
      "f_oc_org": ["dod_dia", "dia", "dni"],
      "f_regions": [],
      "f_missions": [],
      "f_share": [],
      "f_sar_id": [],
      "f_atom_energy": [],
      "f_macs": ["autobots_hotrod", "autobots"],
      "disp_only": ""
    }
  ]
}
