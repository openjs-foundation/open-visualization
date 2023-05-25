import TwitterIcon from './icons/twitter';
import GoogleCalendarIcon from './icons/googleCalendar';
import LinkedInIcon from './icons/linkedin';
import type { FC } from 'react';
import type { FilledLinkToWebField } from '@prismicio/types';
import type { HomeDocumentData, SettingsDocumentData } from '@/prismicio-types';

type FooterProps = {
  navigation: SettingsDocumentData['navigation'];
  description: HomeDocumentData['hero_description'];
  projects: HomeDocumentData['projects'];
  community: HomeDocumentData['community_outlinks'];
};

const social = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/openjsf',
    icon: TwitterIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/openjs-foundation/',
    icon: LinkedInIcon,
  },
  {
    name: 'OpenJS Public Calendar for OpenVis meetings',
    href: 'https://calendar.google.com/calendar/embed?src=linuxfoundation.org_fuop4ufv766f9avc517ujs4i0g%40group.calendar.google.com',
    icon: GoogleCalendarIcon,
  },
];

const Footer: FC<FooterProps> = ({
  navigation,
  projects,
  community,
  description,
}) => (
  <footer
    id="footer"
    className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-16 md:grid-cols-2 md:gap-8">
        <div className="space-y-8 md:max-w-sm">
          <p className="text-base text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex space-x-6">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                Sections
              </p>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.navigation_label}>
                    <a
                      href={(
                        item.navigation_link as FilledLinkToWebField
                      ).url.replace('https://#', '#')}
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400"
                    >
                      {item.navigation_label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <p className="text-base font-medium text-gray-900 dark:text-white">
                Projects
              </p>
              <ul className="mt-4 space-y-4">
                {projects.map((project) => (
                  <li key={project.project_title}>
                    <a
                      href={(project.project_link as FilledLinkToWebField).url}
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400"
                    >
                      {project.project_title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                Community
              </p>
              <ul className="mt-4 space-y-4">
                {community.map((item) => (
                  <li key={item.community_outlink_title}>
                    <a
                      href={
                        (
                          item.community_outlink_cta_link as FilledLinkToWebField
                        ).url
                      }
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400"
                    >
                      {item.community_outlink_title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
        <div className="prose max-w-none dark:prose-invert prose-p:text-sm prose-a:text-primary-blue">
          <p>
            Copyright <a href="https://openjsf.org">OpenJS Foundation</a> and
            Open Visualization contributors. All rights reserved. The{' '}
            <a href="https://openjsf.org">OpenJS Foundation</a> has registered
            trademarks and uses trademarks. For a list of trademarks of the{' '}
            <a href="https://openjsf.org">OpenJS Foundation</a>, please see our{' '}
            <a href="https://trademark-policy.openjsf.org">Trademark Policy</a>{' '}
            and <a href="https://trademark-list.openjsf.org">Trademark List</a>.
            Trademarks and logos not indicated on the{' '}
            <a href="https://trademark-list.openjsf.org">
              list of OpenJS Foundation trademarks
            </a>{' '}
            are trademarks&trade; or registered&reg; trademarks of their
            respective holders. Use of them does not imply any affiliation with
            or endorsement by them.
          </p>
          <p>
            <a href="https://openjsf.org">The OpenJS Foundation</a> |{' '}
            <a href="https://terms-of-use.openjsf.org">Terms of Use</a> |{' '}
            <a href="https://privacy-policy.openjsf.org">Privacy Policy</a> |{' '}
            <a href="https://bylaws.openjsf.org">Bylaws</a> |{' '}
            <a href="https://code-of-conduct.openjsf.org">Code of Conduct</a> |{' '}
            <a href="https://trademark-policy.openjsf.org">Trademark Policy</a>{' '}
            | <a href="https://trademark-list.openjsf.org">Trademark List</a> |{' '}
            <a href="https://www.linuxfoundation.org/cookies">Cookie Policy</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
