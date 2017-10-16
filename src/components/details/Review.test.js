import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { mount, shallow, configure } from "enzyme";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import Adapter from 'enzyme-adapter-react-15';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import Reviews from "./Reviews";
configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);



const history = createHistory();
describe("Review Component ", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      'reducers':{
        search: []
      }
    });
  });
  it("Review renders without crashing", () => {
    let reviews = { results: []}
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Reviews reviews={reviews} />
        </ConnectedRouter>
      </Provider>
    );
  });

  it("Reviews should contain `No Reviews for this movie` text", () => {
    let reviews = { results: []}
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Reviews reviews={reviews}/>
        </ConnectedRouter>
      </Provider>
    );
    expect(wrapper.find('.collection-item').text()).toBe('No Reviews for this movie')
})

});
