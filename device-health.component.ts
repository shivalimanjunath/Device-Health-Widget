import { Component, OnInit } from '@angular/core';

interface Issue {
  key: string;
  devices: number;
  priority: 'critical' | 'urgent';
  fix: string;
}

@Component({
  selector: 'app-device-health',
  templateUrl: './device-health.component.html',
  styleUrls: ['./device-health.component.scss']
})
export class DeviceHealthComponent implements OnInit {

  issues: Issue[] = [
    { key: 'Connection Issue', devices: 14, priority: 'critical', fix: 'Reset Device' },
    { key: 'Power Issue', devices: 2, priority: 'critical', fix: 'Check Cabling' },
    { key: 'SD Card Issue', devices: 1, priority: 'critical', fix: 'Replace SD Card' },
    { key: 'Camera Issue', devices: 8, priority: 'urgent', fix: 'Remount Device' },
    { key: 'No Vehicle', devices: 5, priority: 'urgent', fix: 'Link Vehicle' },
    { key: 'Status Issue', devices: 5, priority: 'urgent', fix: 'Set to “In Service”' }
  ];

  criticalIssues: Issue[] = [];
  urgentIssues: Issue[] = [];

  ngOnInit() {
    this.sortAndGroupIssues(); // Group issues into critical and urgent
  }

  // Method to sort and group issues based on their priority
  sortAndGroupIssues() {
    this.criticalIssues = this.issues.filter(issue => issue.priority === 'critical');
    this.urgentIssues = this.issues.filter(issue => issue.priority === 'urgent');
  }
}

