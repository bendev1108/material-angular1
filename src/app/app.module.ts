import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material/material.module';
import { MaterialTestComponent } from './material-test/material-test.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { MenuMaterialComponent } from './menu-material/menu-material.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
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
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { DynamicComponent } from './tree/dynamic/dynamic.component';
import { ChecklistComponent } from './tree/checklist/checklist.component';
import { FlatComponent } from './tree/flat/flat.component';
import { LoadmoreComponent } from './tree/loadmore/loadmore.component';
import { NestedOverviewComponent } from './tree/nested-overview/nested-overview.component';
import { AutoComponent } from './autocomplete/auto/auto.component';
import { DisplayComponent } from './autocomplete/display/display.component';
import { FilterComponent } from './autocomplete/filter/filter.component';
import { OptgroupComponent } from './autocomplete/optgroup/optgroup.component';
import { OverviewComponent } from './autocomplete/overview/overview.component';
import { PlainInputComponent } from './autocomplete/plain-input/plain-input.component';
import { SimpleComponent } from './autocomplete/simple/simple.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { DateRangePickerComparisonComponent } from './datepicker/date-range-picker-comparison/date-range-picker-comparison.component';
import { DateRangePickerOverviewComponent } from './datepicker/date-range-picker-overview/date-range-picker-overview.component';
import { ActionsComponent } from './datepicker/actions/actions.component';
import { CustomIconComponent } from './datepicker/custom-icon/custom-icon.component';
import { DatepickerFilterComponent } from './datepicker/datepicker-filter/datepicker-filter.component';
import { DialogContentComponent } from './dialog/dialog-content/dialog-content.component';
import { DialogDataComponent } from './dialog/dialog-data/dialog-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTestComponent,
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,

    MenuMaterialComponent,
     GridListComponent,
     IconComponent,
     InputComponent,
     ListComponent,
     MenuComponent,
     ProgressSpinnerComponent,
     RadioButtonComponent,
     RipplesComponent,
     SelectComponent,
     SidenavComponent,
     SlideToggleComponent,
     SliderComponent,
     SnackbarComponent,
     SortHeaderComponent,
     StepperComponent,
     TableComponent,
     TableBasicComponent,
     TableColumnStylingComponent,
     TableDynamicArrayDataComponent,
     TableDynamicColumnsComponent,
     TableExpandableRowsComponent,
     TableFilteringComponent,
     TableFlexComponent,
     TableFooterRowComponent,
     TableHttpComponent,
     TableOverviewComponent,
     TablePaginationComponent,
     TableRowBindingComponent,
     TableRowContextComponent,
     TableSelectionComponent,
     TableSortingComponent,
     TableStickyComplexFlexComponent,
     TabsComponent,
     ToolbarComponent,
     TooltipComponent,
     TreeComponent,
     DynamicComponent,
     ChecklistComponent,
     FlatComponent,
     LoadmoreComponent,
     NestedOverviewComponent,
     AutoComponent,
     DisplayComponent,
     FilterComponent,
     OptgroupComponent,
     OverviewComponent,
     PlainInputComponent,
     SimpleComponent,
     ButtonComponent,
     ButtonToggleComponent,
     DateRangePickerComparisonComponent,
     DateRangePickerOverviewComponent,
     ActionsComponent,
     CustomIconComponent,
     DatepickerFilterComponent,
     DialogContentComponent,
     DialogDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormFieldComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA ]
})
export class AppModule { }
