import '@white-label-airline/services/i18n/i18n.service.mock';
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
