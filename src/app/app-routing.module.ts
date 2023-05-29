import { DialogContentComponent } from './dialog/dialog-content/dialog-content.component';
import { DateRangePickerOverviewComponent } from './datepicker/date-range-picker-overview/date-range-picker-overview.component';
import { DateRangePickerComparisonComponent } from './datepicker/date-range-picker-comparison/date-range-picker-comparison.component';
import { SimpleComponent } from './autocomplete/simple/simple.component';
import { OverviewComponent } from './autocomplete/overview/overview.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { RipplesComponent } from './ripples/ripples.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableBasicComponent } from './table/table-basic/table-basic.component';
import { TableColumnStylingComponent } from './table/table-column-styling/table-column-styling.component';
import { TableDynamicArrayDataComponent } from './table/table-dynamic-array-data/table-dynamic-array-data.component';
import { TableDynamicColumnsComponent } from './table/table-dynamic-columns/table-dynamic-columns.component';
import { TableExpandableRowsComponent } from './table/table-expandable-rows/table-expandable-rows.component';
import { TableFilteringComponent } from './table/table-filtering/table-filtering.component';
import { TableFlexComponent } from './table/table-flex/table-flex.component';
import { TableFooterRowComponent } from './table/table-footer-row/table-footer-row.component';
import { TableHttpComponent } from './table/table-http/table-http.component';
import { TableOverviewComponent } from './table/table-overview/table-overview.component';
import { TablePaginationComponent } from './table/table-pagination/table-pagination.component';
import { TableRowBindingComponent } from './table/table-row-binding/table-row-binding.component';
import { TableRowContextComponent } from './table/table-row-context/table-row-context.component';
import { TableSelectionComponent } from './table/table-selection/table-selection.component';
import { TableSortingComponent } from './table/table-sorting/table-sorting.component';
import { TableStickyComplexFlexComponent } from './table/table-sticky-complex-flex/table-sticky-complex-flex.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DynamicComponent } from './tree/dynamic/dynamic.component';
import { ChecklistComponent } from './tree/checklist/checklist.component';
import { FlatComponent } from './tree/flat/flat.component';
import { LoadmoreComponent } from './tree/loadmore/loadmore.component';
import { NestedOverviewComponent } from './tree/nested-overview/nested-overview.component';
import { AutoComponent } from './autocomplete/auto/auto.component';
import { DisplayComponent } from './autocomplete/display/display.component';
import { FilterComponent } from './autocomplete/filter/filter.component';
import { OptgroupComponent } from './autocomplete/optgroup/optgroup.component';
import { PlainInputComponent } from './autocomplete/plain-input/plain-input.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ActionsComponent } from './datepicker/actions/actions.component';
import { CustomIconComponent } from './datepicker/custom-icon/custom-icon.component';
import { DatepickerFilterComponent } from './datepicker/datepicker-filter/datepicker-filter.component';
import { DialogDataComponent } from './dialog/dialog-data/dialog-data.component';

const routes: Routes = [
  {path: 'auto', component: AutoComponent},
  {path: 'display', component: DisplayComponent},
  {path:' filter', component: FilterComponent},
  {path: 'optgroup', component: OptgroupComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'plain input', component: PlainInputComponent},
  {path: 'simple', component: SimpleComponent},
  {path: 'bottom sheet', component: BottomSheetComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'buttom toggle', component: ButtonToggleComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'expansion panel', component: ExpansionPanelComponent},
  {path: 'date range picker comparison', component: DateRangePickerComparisonComponent},
  {path: 'date range picker overview', component: DateRangePickerOverviewComponent},
  {path: 'actions', component: ActionsComponent},
  {path: 'custom icon', component: CustomIconComponent},
  {path: 'filter', component: DatepickerFilterComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'dialog content', component: DialogContentComponent},
  {path: 'dialog data', component: DialogDataComponent},
  {path: 'bottom sheet', component: BottomSheetComponent},
  {path: 'card', component: CardComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'form field', component: FormFieldComponent},
  {path: 'grid list', component: GridListComponent},
  {path: 'icon', component: IconComponent},
  {path: 'input', component: InputComponent},
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'progress spinner', component: ProgressSpinnerComponent},
  {path: 'radio button', component: RadioButtonComponent},
  {path: 'ripples', component: RipplesComponent},
  {path: 'select', component: SelectComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'slide toggle', component: SlideToggleComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'sort header', component: SortHeaderComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'table basic', component: TableBasicComponent},
  {path: 'table column styling', component: TableColumnStylingComponent},
  {path: 'table dynamic array data', component: TableDynamicArrayDataComponent},
  {path: 'table dynamic columns', component: TableDynamicColumnsComponent},
  {path: 'table expandable rows', component: TableExpandableRowsComponent},
  {path: 'table filtering', component: TableFilteringComponent},
  {path: 'table flex', component: TableFlexComponent},
  {path: 'table footer row', component: TableFooterRowComponent},
  {path: 'table http', component: TableHttpComponent},
  {path: 'table overview', component: TableOverviewComponent},
  {path: 'table pagination', component: TablePaginationComponent},
  {path: 'row binding', component: TableRowBindingComponent},
  {path: 'row context', component: TableRowContextComponent},
  {path: 'table selection', component: TableSelectionComponent},
  {path: 'table sorting', component: TableSortingComponent},
  {path: 'table sticky complex flex', component: TableStickyComplexFlexComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'tree dynamic', component: DynamicComponent},
  {path: 'tree checklist', component: ChecklistComponent},
  {path: 'tree flat', component: FlatComponent},
  {path: 'tree loadmore', component: LoadmoreComponent},
  {path: 'tree nested overview', component: NestedOverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
