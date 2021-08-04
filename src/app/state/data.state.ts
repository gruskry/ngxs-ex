import { SavedPhotoModel } from './../models/data.model';
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { DeletePhoto, SavePhoto } from "./data.action";
import produce from 'immer';

export class SavedPhotoStateModel {
  photos!: SavedPhotoModel[];
}

@State<SavedPhotoStateModel>({
  name:'SavedPhoto',
  defaults: {
    photos: []
  }
})
export class DataState {

  @Selector()
  static getPhotos(state: SavedPhotoStateModel) {
    return state.photos
  }

  @Action(SavePhoto)
  add(patchState: StateContext<SavedPhotoStateModel>, action: SavePhoto) {
    const state = patchState.getState();
    patchState.setState({
      photos:[...state.photos, action.payload]
    });
  }

  @Action(DeletePhoto)
    deleteCourse(patchState: StateContext<SavedPhotoStateModel>, action: DeletePhoto) {
      const state = patchState.getState();
      const filteredArray = state.photos.filter(item => item.url !== action.url);
      patchState.setState({
        ...state,
        photos: filteredArray,
      });
    }
}
