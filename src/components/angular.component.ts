import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
    <div class="container">
      <p class="text">Hello from Angular!!</p>
    </div>
  `,
  styles: [
    `
      .container {
        min-width: 300px;
        max-width: 24rem;
        margin: 0.25rem 0;
        border-radius: 0.25rem;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        background-color: #dd0330;
        padding: 1rem;
        border-left: 0.25rem solid #4a5568;
      }

      .text {
        color: white;
        font-size: 1rem;
      }
    `,
  ],
  standalone: true,
})
export class AngularComponent {}
