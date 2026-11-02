import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  ALL_ENTRIES,
  DESIGN_SYSTEM,
  NAV_GROUPS,
  OVERVIEW_ENTRY,
  type NavGroup,
} from './registry';

function readHashId(): string {
  const id = new URLSearchParams(window.location.hash.slice(1)).get('page');
  if (!id) {
    return OVERVIEW_ENTRY.id;
  }
  return ALL_ENTRIES.some((entry) => entry.id === id)
    ? id
    : OVERVIEW_ENTRY.id;
}

function useSelectedId(): [string, (id: string) => void] {
  const [selected, setSelected] = useState(readHashId);

  useEffect(() => {
    const onHashChange = () => setSelected(readHashId());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const select = (id: string) => {
    setSelected(id);
    window.location.hash = new URLSearchParams({ page: id }).toString();
  };

  return [selected, select];
}

function NavigationItems({
  showOverview,
  groups,
  activeId,
  query,
  select,
}: {
  showOverview: boolean;
  groups: NavGroup[];
  activeId: string;
  query: string;
  select: (id: string) => void;
}) {
  return (
    <nav aria-label="Design system navigation" className="space-y-5 py-2">
      {showOverview ? (
        <button
          type="button"
          onClick={() => select(OVERVIEW_ENTRY.id)}
          aria-current={OVERVIEW_ENTRY.id === activeId}
          className="block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-muted aria-[current=true]:bg-primary aria-[current=true]:text-primary-foreground"
        >
          {OVERVIEW_ENTRY.name}
        </button>
      ) : null}

      {groups.map((group) => (
        <div key={group.name}>
          <p className="px-3 text-[11px] font-semibold uppercase tracking-[.14em] text-muted-foreground">
            {group.name}
          </p>
          <div className="mt-2 space-y-1 border-l border-border pl-2">
            {group.entries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => select(entry.id)}
                aria-current={entry.id === activeId}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-muted aria-[current=true]:bg-primary aria-[current=true]:text-primary-foreground"
              >
                {entry.name}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!showOverview && groups.length === 0 ? (
        <p className="px-2 py-4 text-sm text-muted-foreground">
          No sections match “{query}”.
        </p>
      ) : null}
    </nav>
  );
}

export function DesignSystemBrowser() {
  const [selectedId, select] = useSelectedId();
  const [query, setQuery] = useState('');
  const [isDark, setIsDark] = useState(() => {
    try {
      return window.localStorage.getItem('artyverse-design-system-theme') === 'dark';
    } catch {
      return false;
    }
  });
  const mobileNav = useRef<HTMLDetailsElement>(null);
  const mobileNavSummary = useRef<HTMLElement>(null);
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = useMemo(
    () =>
      NAV_GROUPS.map((group) => ({
        ...group,
        entries: group.name.toLowerCase().includes(normalizedQuery)
          ? group.entries
          : group.entries.filter((entry) =>
              `${entry.name} ${entry.description}`
                .toLowerCase()
                .includes(normalizedQuery),
            ),
      })).filter((group) => group.entries.length > 0),
    [normalizedQuery],
  );

  const active =
    ALL_ENTRIES.find((entry) => entry.id === selectedId) ?? OVERVIEW_ENTRY;
  const activeGroup = NAV_GROUPS.find((group) =>
    group.entries.some((entry) => entry.id === active.id),
  );
  const ActivePage = active.Page;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [active.id]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      window.localStorage.setItem('artyverse-design-system-theme', isDark ? 'dark' : 'light');
    } catch {
      // Theme selection still works for this session when storage is unavailable.
    }
  }, [isDark]);

  const showOverview = `${OVERVIEW_ENTRY.name} ${OVERVIEW_ENTRY.description}`
    .toLowerCase()
    .includes(normalizedQuery);
  const selectPage = (id: string) => {
    select(id);
    if (mobileNav.current?.open) {
      mobileNav.current.removeAttribute('open');
      mobileNavSummary.current?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground md:grid md:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="border-b bg-muted/20 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:border-b-0 md:border-r">
        <div className="border-b border-border px-5 py-5">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}artyverse-mark.svg`}
              alt=""
              className="size-9 shrink-0"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold tracking-tight">
                ARTYVERSE <span className="text-primary">X</span> AI ASSISTANT
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Design system</p>
            </div>
          </div>
        </div>
        <div className="p-4 pb-2">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="ค้นหาใน design system"
            placeholder="ค้นหาส่วนประกอบ..."
          />
        </div>
        <div className="hidden min-h-0 flex-1 overflow-y-auto px-4 pb-4 md:block">
          <NavigationItems
            showOverview={showOverview}
            groups={filteredGroups}
            activeId={active.id}
            query={query}
            select={selectPage}
          />
        </div>
        <details ref={mobileNav} className="border-t px-4 py-3 md:hidden">
          <summary
            ref={mobileNavSummary}
            className="cursor-pointer text-sm font-medium"
          >
            ดูหมวดหมู่:{' '}
            <span className="text-muted-foreground">{active.name}</span>
          </summary>
          <div className="mt-3 max-h-64 overflow-y-auto pb-2">
            <NavigationItems
              showOverview={showOverview}
              groups={filteredGroups}
              activeId={active.id}
              query={query}
              select={selectPage}
            />
          </div>
        </details>
      </aside>

      <main className="min-w-0 px-4 py-6 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <header className="border-b border-border pb-7 sm:pb-8">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={`${import.meta.env.BASE_URL}artyverse-mark.svg`}
                  alt=""
                  className="size-8 shrink-0"
                />
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold tracking-tight sm:text-sm">
                    ARTYVERSE <span className="text-primary">X</span> AI ASSISTANT
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">{DESIGN_SYSTEM.title}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                aria-label={isDark ? 'เปลี่ยนเป็น Light mode' : 'เปลี่ยนเป็น Dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
                onClick={() => setIsDark((current) => !current)}
              >
                {isDark ? <Sun /> : <Moon />}
              </Button>
            </div>
            {active.id === OVERVIEW_ENTRY.id ? (
              <>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {DESIGN_SYSTEM.title}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {DESIGN_SYSTEM.description}
                </p>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">
                  {activeGroup?.name}
                </p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight">{active.name}</h1>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {active.description}
                </p>
              </>
            )}
          </header>

          <div className="pt-6 sm:pt-8">
            <Suspense
              fallback={
                <div
                  role="status"
                  className="rounded-xl border bg-card p-6 text-sm text-muted-foreground"
                >
                  Loading preview…
                </div>
              }
            >
              <ActivePage />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
