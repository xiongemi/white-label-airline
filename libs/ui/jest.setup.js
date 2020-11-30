import '@white-label-airline/services/i18n/i18n.mock';

import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
