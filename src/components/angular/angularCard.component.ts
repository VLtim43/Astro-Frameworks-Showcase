import { Component } from "@angular/core";

@Component({
  selector: "app-angular-card",
  template: `
    <div class="container">
      <div class="header">
        <h1 class="made-with-text">Made with Angular</h1>
      </div>

      <div class="content">
        <h1 class="title">Angular</h1>
        <h3 class="subtitle">
          A platform for building mobile and desktop web applications
        </h3>
        <a
          href="https://angular.io/"
          class="documentation-link"
          target="_blank"
          rel="noopener noreferrer"
          >View the documentation</a
        >
      </div>

      <div class="footer">
        <img src="/angularLogo.png" alt="Angular Logo" class="logo" />
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom right, #dd0330, #f87171);
        color: #e2e8f0;
        padding: 1rem;
      }

      .header,
      .footer {
        display: flex;
        justify-content: flex-end;
        padding: 0.25rem 0.5rem;
      }

      .content {
        padding: 0.5rem;
      }

      .made-with-text {
        color: #ffffff;
        font-size: 0.75rem;
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
      }

      .subtitle {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .documentation-link {
        color: #ffffff;
        text-decoration: underline;
        cursor: pointer;
      }

      .documentation-link:hover {
        color: #007bff;
      }

      .logo {
        width: 1.75rem;
        height: 1.75rem;
        margin: 0.25rem;
        padding: 0.125rem;
      }
    `,
  ],
  standalone: true,
})
export class AngularComponent {}
