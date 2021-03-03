import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from 'utils/configureStore';
import { DEFAULT_LOCALE } from 'utils/locales';
import RegisterPage from '../index';
import 'utils/__tests__/__mocks__/matchMedia';

describe('<RegisterPage />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render its registerPage', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <ConnectedRouter history={history}>
            <HelmetProvider>
              <RegisterPage />
            </HelmetProvider>
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
