import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import AnalyticsDashboardAppConfig from './dashboards/analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './dashboards/project/ProjectDashboardAppConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import MailAppConfig from './mail/MailAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TodoAppConfig from './todo/TodoAppConfig';
import ReturnInvestLogConfig from './returnInvestLog/returnInvestLogConfig';
import DepositHistoryLogConfig from './depositHistory/depositHistoryLogConfig';
import WithdrawHistoryLogConfig from './withdrawHistory/withdrawHistoryLogConfig';
import TransactionHistoryLogConfig from './transactionHistory/transactionHistoryLogConfig';
import ReferralStaticConfig from './referralStatic/referralStaticConfig';
import SupportTicketConfig from './supportTicket/supportTicketConfig';
import NewSupportTicketConfig from './newSupportTicket/newSupportTicketConfig';
import ProfileConfig from './profile/profileConfig';
import TwoFASecurityConfig from './twoFASecurity/twoFASecurityConfig';
import DepositNowConfig from './depositNow/depositNowConfig';

const appsConfigs = [
  AnalyticsDashboardAppConfig,
  ProjectDashboardAppConfig,
  MailAppConfig,
  TodoAppConfig,
  FileManagerAppConfig,
  ContactsAppConfig,
  CalendarAppConfig,
  ChatAppConfig,
  ECommerceAppConfig,
  ScrumboardAppConfig,
  AcademyAppConfig,
  NotesAppConfig,


  ReturnInvestLogConfig,
  DepositHistoryLogConfig,
  WithdrawHistoryLogConfig,
  TransactionHistoryLogConfig,
  ReferralStaticConfig,
  SupportTicketConfig,
  NewSupportTicketConfig,
  ProfileConfig,
  TwoFASecurityConfig,
  DepositNowConfig,
];

export default appsConfigs;
