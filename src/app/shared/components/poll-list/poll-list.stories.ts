import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { Column } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { ScheduleListComponent } from './poll-list.component';
import { ScheduleListModule } from './poll-list.module';

storiesOf('Ga List', module)
    .add('Ga Component', () => ({
        component: ScheduleListComponent,
        moduleMetadata: {
            imports: [
                ScheduleListModule,BrowserAnimationsModule
            ],
          },
        props: {
            //Input
            scheduleColumns: columns,
            scheduleDataSource: dataSource,
            scheduleTotalRecords: 100,
            scheduleRecordsPerPage: 5,
            scheduleShowRowSelection: false,
            scheduleDataImportance: dataImportance,
            scheduleDataCategory: fakeData,
            buttonFilterSchedule: buttonFilterSchedule,
            labelScheduleFilter: labelScheduleFilter,
            placeholderFilterSchedule: placeholderFilterSchedule,
            valueFilter: action('filter'),
            //OutPut
            btnAddSchedule: action('btn add'),
            onPageChange: action('page changes'),
            rowClicked: action('handlerClickRow'),
            sort: action('handlersort'),
            rowsSelected: action('handleselectrow'),
        },

    }));

// mock data
const columns: Column[] = [
    {
        title: 'STT',
        dataIndex: 'scheduleName',
        sort: true,
    },
    {
        title: 'Question',
        dataIndex: 'time',
        sort: true,
    },
    {
        title: 'Expriration',
        dataIndex: 'category',
        sort: true,
    },
    {
        title: 'Status',
        dataIndex: 'description',
    },
    {
        title: 'Created by',
        dataIndex: 'place',
        sort: true,
    },
];

const dataSource = [
  { id: 1, scheduleName: '1', time: 'Giải đấu Liên Quân', category: '31/12/2020 17:30', description: 'In process', place: 'Phuong Dung', importance: ''},
  { id: 2, scheduleName: '2', time: 'Cuối tuần bạn muốn đi đâu?', category: '25/12/2020 11:30',  description: 'In process', place: 'Thach monus', importance: ''},
  { id: 3, scheduleName: '3', time: 'Tiệc Noel ăn gì?', category: '18/12/2020 17:30', description: 'In process', place: 'nc_nghi', importance: ''},
  { id: 4, scheduleName: '4', time: 'Teambuilding', category: '31/11/2020 17:30', description: 'Expired', place: 'Phuong Dung', importance: ''},
  { id: 5, scheduleName: '5', time: 'Mùa hè sôi động', category: '25/5/2020 17:30', description: 'Expired', place: 'Phuong Dung', importance: ''},
];

//filter
const placeholderFilterSchedule: PlaceholderFilterSchedule = {
  placeholderSearch: 'search schedule...',
  titleImportance: 'importance',
  titleCategory: 'category',
};

const labelScheduleFilter: LabelFilterSchedule<LabelInterface> = {
  labelImportance: {
    content: 'Importance',
    size: 17,
    color: '',
    backgroundColor: '',
  },
  labelFromDate: {
    content: 'From date',
    size: 17,
    color: '',
    backgroundColor: '',
  },
  labelToDate: {
    content: 'To date',
    size: 17,
    color: '',
    backgroundColor: '',
  },
  labelCategory: {
    content: 'Category',
    size: 17,
    color: '',
    backgroundColor: '',
  },
};

const buttonFilterSchedule: ButtonFilterSchedule<configButton> = {
  buttonSubmit: {
    colorButton: 'primary',
    colorMouseOver: 'primary',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'Filter',
  },
  buttonReset: {
    colorButton: 'basic',
    colorMouseOver: 'basic',
    colorMouseOut: 'basic',
    type: 'reset',
    text: 'Clear',
  },
};

const dataImportance: LabelledValue<string>[] = [
  {
    label: 'high',
    value: '1',
  },
  {
    label: 'medium',
    value: '2',
  },
  {
    label: 'low',
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
