import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { SharedModule } from '../../shared.module';
import { DatetimePickerComponent } from './datetime-picker.component';

storiesOf('DatetimePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
    })
  )
  .add('Datetime Picker Component', () => ({
    component: DatetimePickerComponent,
    props: {
      inputDate: new Date('09/11/2020 20:11'),
      getDate: action("detail"),
    },
  }));
  