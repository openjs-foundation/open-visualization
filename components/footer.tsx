import type { FC } from 'react';
import type { FilledLinkToWebField } from '@prismicio/types';
import FacebookIcon from './icons/facebook';
import TwitterIcon from './icons/twitter';
import GitHubIcon from './icons/github';
import GoogleCalendarIcon from './icons/googleCalendar';
import YoutubeIcon from './icons/youtube';
import type { HomeDocument } from '@/types.generated';
import links from '@/lib/navigation';

type FooterProps = {
  description: HomeDocument['data']['hero_description'];
  projects: HomeDocument['data']['projects'];
  community: HomeDocument['data']['community_outlinks'];
};

const navigation = {
  sections: links.map((link) => ({
    name: link.label,
    href: link.href,
  })),
  projects: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FacebookIcon,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: GitHubIcon,
    },
    {
      name: 'OpenJS Public Calendar for OpenVis meetings',
      href: '#',
      icon: GoogleCalendarIcon,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: YoutubeIcon,
    },
  ],
};

const Footer: FC<FooterProps> = ({ projects, community, description }) => (
  <footer
    id="footer"
    className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="space-y-8 xl:col-span-1 max-w-sm">
          <p className="text-base text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
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
        <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Sections
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.sections.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Projects
              </h3>
              <ul className="mt-4 space-y-4">
                {projects.map((project) => (
                  <li key={project.project_title}>
                    <a
                      href={(project.project_link as FilledLinkToWebField).url}
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900"
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
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Community
              </h3>
              <ul className="mt-4 space-y-4">
                {community.map((item) => (
                  <li key={item.community_outlink_cta_label}>
                    <a
                      href={
                        (
                          item.community_outlink_cta_link as FilledLinkToWebField
                        ).url
                      }
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900"
                    >
                      {item.community_outlink_cta_label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="prose dark:prose-invert max-w-none prose-p:text-sm">
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
