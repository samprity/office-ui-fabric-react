/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { BasePicker, BasePickerListBelow } from '../BasePicker';
import { IBasePickerProps } from '../BasePicker.Props';
import { SelectedItemDefault } from './PeoplePickerItems/SelectedItemDefault';
import { IPersonaProps } from '../../../Persona';
import { SuggestionItemSmall, SuggestionItemNormal } from './PeoplePickerItems/SuggestionItemDefault';
import './PeoplePicker.scss';

export interface IPeoplePickerProps extends IBasePickerProps<IPersonaProps> {
}

export class BasePeoplePicker extends BasePicker<IPersonaProps, IPeoplePickerProps> {
}

export class MemberListPeoplePicker extends BasePickerListBelow<IPersonaProps, IPeoplePickerProps> {
}

/**
 * Standard People Picker.
 */
export class NormalPeoplePicker extends BasePeoplePicker {
  public static defaultProps = {
    onRenderItem: (props) => <SelectedItemDefault {...props} />,
    onRenderSuggestionsItem: (props, itemProps?) => SuggestionItemNormal({ ...props }, { ...itemProps })
  };
}

/**
* Compact layout. It uses small personas when displaying search results.
*/
export class CompactPeoplePicker extends BasePeoplePicker {
  public static defaultProps = {
    onRenderItem: (props) => <SelectedItemDefault {...props} />,
    onRenderSuggestionsItem: (props, itemProps?) => SuggestionItemSmall({ ...props }, { ...itemProps })
  };
}

/**
 * MemberList layout. The selected people show up below the search box.
 */
export class ListPeoplePicker extends MemberListPeoplePicker {
  public static defaultProps = {
    onRenderItem: (props) => <SelectedItemDefault {...props} />,
    onRenderSuggestionsItem: (props, itemProps?) => SuggestionItemNormal({ ...props }, { ...itemProps })
  };
}
