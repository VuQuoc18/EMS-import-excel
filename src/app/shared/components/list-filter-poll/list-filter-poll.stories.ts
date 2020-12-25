import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { ICheckBoxItem,CheckboxInterface } from '../../../store/models/checkbox-item.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ListFilterScheduleComponent } from './list-filter-poll.component';
import { FilterModule } from './list-filter-poll.module';

storiesOf('Create Poll', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [FilterModule, BrowserAnimationsModule],
    })
  )
  .add('Create Poll', () => ({
    component: ListFilterScheduleComponent,
    props: {
      dataImportance: dataImportance,
      dataCategory: fakeData,
      titleGroupCheckbox: titleGroup,
      placeholderSearch: placeholder,
      labelCategory: labelCategory,
      labelImportance: labelImportance,
      labelFromDate: labelFromDate,
      labelToDate: labelToDate,
      labelQuestion: labelQuestion,
      labelExpiration: labelExpiration,
      labelOption: labelOption,
      buttonSubmit: configButtonSubmit,
      buttonReset: configButtonReset,
      titleImportance: importance,
      titleCategory: category,

      dataCheckbox : checkboxContent,
      valueFilter: action('filter'),
    },
  }));
const placeholder = 'search todo...';
const titleGroup = '';
const dataImportance: LabelledValue<string>[] = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];
const fakeData: Category[] = [
  { categoryName: 'Python', categoryId: 1 },
  { categoryName: 'React', categoryId: 2 },
  { categoryName: 'PHP', categoryId: 3 },
  { categoryName: 'Laravel', categoryId: 4 },
  { categoryName: 'NestJS', categoryId: 5 },
  { categoryName: 'Spring Boot', categoryId: 6 },
  { categoryName: 'Java', categoryId: 7 },
  { categoryName: 'Ruby', categoryId: 8 },
];
const checkboxField: ICheckBoxItem[] = [
  {
    label: 'Incomplete',
    checked: false,
    value: 'incomplete',
  },
  {
    label: 'Complete',
    checked: false,
    value: 'complete',
  },
];
const checkboxContent : CheckboxInterface[] = [
  {name : "Allow multiple Poll answers", checked : false},
]
const labelCategory: LabelInterface = {
  content: 'Category',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelImportance: LabelInterface = {
  content: 'Importance',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelFromDate: LabelInterface = {
  content: 'From date',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelToDate: LabelInterface = {
  content: 'To date',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelQuestion: LabelInterface = {
  content: 'Question:',
  size: 17,
  color: '',
  backgroundColor: '',
};

const labelExpiration: LabelInterface = {
  content: 'Expiration',
  size: 17,
  color: 'black',
  backgroundColor: '',
}

const labelOption: LabelInterface = {
  content: 'Option:',
  size: 17,
  color: 'black',
  backgroundColor: '',
}

const configButtonSubmit: configButton = {
  colorButton: 'primary',
  colorMouseOver: 'primary',
  colorMouseOut: 'primary',
  type: 'submit',
  text: 'Create Poll',
};
const configButtonReset: configButton = {
  colorButton: 'basic',
  colorMouseOver: 'basic',
  colorMouseOut: 'basic',
  type: 'reset',
  text: 'Clear',
};
const importance = 'Importance';
const category = 'Category';
