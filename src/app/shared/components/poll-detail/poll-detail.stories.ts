import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PollDetailComponent } from './poll-detail.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollDetailModule } from './poll-detail.module';


storiesOf('Pages/Poll Detail', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [PollDetailModule, BrowserAnimationsModule, MaterialCustomModule],
        })
    )
    .add("Poll Detail", () => ({
        component: PollDetailComponent,
        props: {
            CategoryArray: [
                {
                    label: "Todo",
                    value: 1
                },
                {
                    label: 'Schedule',
                    value: 2
                }
            ],
            ImportanceArray: [
                {
                    label: "Important",
                    value: "Important"
                },
                {
                    label: "No Important",
                    value: "No Important"
                }
            ],
            addTodo: action('Add todo')

        }
    }))
   