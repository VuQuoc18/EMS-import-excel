import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PollMainComponent } from './poll-main.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollMainModule } from './poll-main.module';

storiesOf('Pages/Poll', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [PollMainModule, BrowserAnimationsModule, MaterialCustomModule],
        })
    )
    .add("Poll Main", () => ({
        component: PollMainComponent,
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
