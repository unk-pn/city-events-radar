export interface TicketmasterResponse {
  _links?: Links;
  _embedded?: {
    events: Event[];
  };
  page?: Page;
}

export interface Event {
  _links?: Links;
  _embedded?: EventEmbedded;
  type: string;
  distance?: number;
  units?: string;
  location?: EventLocation;
  id: string;
  locale: string;
  name: string;
  description?: string;
  additionalInfo?: string;
  url?: string;
  images?: EventImage[];
  dates?: EventDates;
  sales?: EventSales;
  info?: string;
  pleaseNote?: string;
  priceRanges?: PriceRange[];
  promoter?: Promoter;
  promoters?: Promoter[];
  outlets?: unknown[];
  productType?: string;
  products?: unknown[];
  seatmap?: EventSeatmap;
  accessibility?: EventAccessibility;
  ticketLimit?: EventTicketLimit;
  classifications?: Classification[];
  place?: EventPlace;
  externalLinks?: ExternalLinks;
  test?: boolean;
  aliases?: string[];
  localizedAliases?: Record<string, string>;
}

export interface EventImage {
  url: string;
  width?: number;
  height?: number;
  fallback?: boolean;
  ratio?: string;
}

export interface EventDates {
  start?: {
    localDate?: string;
    localTime?: string;
    dateTime?: string;
  };
  end?: {
    localDate?: string;
    localTime?: string;
    dateTime?: string;
  };
  timezone?: string;
  status?: {
    code: string;
  };
}

export interface EventSales {
  public?: {
    startDateTime?: string;
    endDateTime?: string;
  };
}

export interface PriceRange {
  type: string;
  currency: string;
  min: number;
  max: number;
}

export interface Promoter {
  id: string;
  name: string;
  description?: string;
}

export interface Venue {
  id: string;
  name: string;
  type: string;
  url?: string;
  locale?: string;
  postalCode?: string;
  timezone?: string;
  city?: {
    name: string;
  };
  state?: {
    name: string;
    stateCode: string;
  };
  country?: {
    name: string;
    countryCode: string;
  };
  address?: {
    line1?: string;
    line2?: string;
  };
  location?: {
    longitude: string;
    latitude: string;
  };
}

export interface Attraction {
  id: string;
  name: string;
  type: string;
  url?: string;
  locale?: string;
  images?: EventImage[];
  classifications?: Classification[];
}

export interface EventLocation {
  longitude?: string;
  latitude?: string;
}

export interface EventEmbedded {
  venues?: Venue[];
  attractions?: Attraction[];
}

export interface ExternalLinks {
  youtube?: { url: string }[];
  twitter?: { url: string }[];
  facebook?: { url: string }[];
  wiki?: { url: string }[];
  musicbrainz?: { url: string }[];
  homepage?: { url: string }[];
}

export interface EventAccessibility {
  ticketLimit?: number;
  info?: string;
}

export interface EventSeatmap {
  staticUrl?: string;
}

export interface EventTicketLimit {
  info?: string;
}

export interface EventPlace {
  area?: {
    name: string;
  };
  city?: {
    name: string;
  };
  country?: {
    name: string;
    countryCode: string;
  };
  region?: {
    name: string;
  };
}

export interface Classification {
  primary: boolean;
  segment?: {
    genres?: Genre[];
    id: string;
    name: string;
    locale: string;
  };
  genre?: {
    id: string;
    name: string;
    locale: string;
  };
  subGenre?: SubGenre;
  type?: {
    subTypes?: SubType[];
    id: string;
    name: string;
    locale: string;
  };
  subType?: SubType;
  family?: boolean;
}

export interface Genre {
  subGenres?: SubGenre[];
  id: string;
  name: string;
  locale: string;
}

export interface SubGenre {
  id: string;
  name: string;
  locale: string;
}

export interface SubType {
  id: string;
  name: string;
  locale: string;
}

export interface Links {
  self?: {
    href: string;
    templated?: boolean;
  };
  next?: {
    href: string;
    templated?: boolean;
  };
  prev?: {
    href: string;
    templated?: boolean;
  };
  first?: {
    href: string;
    templated?: boolean;
  };
  last?: {
    href: string;
    templated?: boolean;
  };
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface EventsState {
  events: Event[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
}

export interface EventCardProps {
  event: Event;
  onClick?: (event: Event) => void;
}

export interface SearchFilters {
  city?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
  keyword?: string;
  sort?: 'date' | 'name' | 'relevance';
}

export interface ApiError {
  error: string;
}

export type EventsApiResponse = TicketmasterResponse | ApiError;

export function isApiError(response: EventsApiResponse): response is ApiError {
  return 'error' in response;
}