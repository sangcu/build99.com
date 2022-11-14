import classNames from 'classnames'
import Link from 'next/link'
import { INavItem } from '../types'

const NavItem: React.FC<INavItem> = ({
  name,
  slug,
  children,
  level = 0,
  currentSlug,
  onItemClick,
}) => {
  const current = currentSlug === slug

  return (
    <li className={classNames('pt-1')}>
      {slug ? (
        <div
          className={classNames(
            level === 0 && 'font-semibold',
            current ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600',
            'py-1 text-sm cursor-pointer',
            level !== 0 && 'pl-6',
            level !== 0 &&
              'hover:border-l-2 hover:-ml-0.5 hover:border-orange-600',
          )}
        >
          <Link href={`/docs/${slug}`}>
            <a onClick={() => onItemClick && onItemClick(name)}>{name}</a>
          </Link>
        </div>
      ) : (
        <div
          onClick={() => onItemClick && onItemClick(name)}
          className={classNames(
            level === 0 && 'font-semibold',
            'py-1 text-sm text-gray-500 cursor-default',
            level !== 0 && 'pl-6',
          )}
        >
          {name}
        </div>
      )}

      <ul
        className={classNames(
          'ml-1 list-none border-l border-gray-200',
          level !== 0 && 'ml-6',
        )}
      >
        {children?.map((item) => (
          <NavItem
            {...item}
            level={level + 1}
            key={item.name}
            currentSlug={currentSlug}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </li>
  )
}

const Naviation: React.FC<{
  currentSlug: string
  navigations: INavItem[]
  onItemClick?: (name: string) => void
}> = ({ currentSlug, navigations, onItemClick }) => {
  return (
    <nav className="flex-1">
      <ul className="list-none space-y-2">
        {navigations.map((item) => (
          <NavItem
            {...item}
            key={item.name}
            currentSlug={currentSlug}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Naviation
