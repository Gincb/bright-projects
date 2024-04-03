interface ITimestamps {
  deleted_at?: string
  created_at?: string
  updated_at?: string
}

export interface IAgreemnetFile extends ITimestamps {
  disk?: any
  extension: string
  id: number
  name: string
  path: string
  pivot: {
    activity_id: number
    media_id: number
    created_at: string
    updated_at: string
  }
  provider_id: number
  type: string
}

export interface IActivity {
  id: number
  external_key: string
  name: string
  description: string
  activity_group: string
  agreement_file: IAgreemnetFile
  categories: Array<{ id: number; name: string }>
  grades: boolean
  homework: boolean
  images: Array<{ id: number; path: string }>
  in_use: boolean
  main_media_id: number
  main_media_path: string
  rating: string
  rating_count: number
  registration_price_fixed: boolean
  acquired_skills?: string
  additional_info?: string
  required_provided_equipment?: boolean
  reviews?: Array<any>
}

export interface IDifficultyType extends ITimestamps {
  id: number
  provider_id: number
  name: string
  description?: string
}

export interface ILocation {
  id: number
  provider_id: number
  name: string
  address: string
  street: string
  city: string
  country: string
  house_number: string
  in_use: boolean
  lat: string
  lon: string
  neighborhood?: string
  optional_details?: string
  description?: string
  floor_suite?: string
  after_school_pickup?: string
  building_type?: string
  timezone?: string
}

export interface IPaymentIntervals extends ITimestamps {
  id: number
  external_key: string
  name: string
  lesson_count: number
  duration: number
  group_price: number
  payment_type: { id: number; type: string }
  payment_type_id: number
  pivot?: { payment_interval_id: number; provider_id: number }
  upcoming_payment_schedule?: string
  upcoming_payment_schedule_amount?: number
  upcoming_payment_schedule_detailed?: Array<any>
}

export interface IBillingSettings extends ITimestamps {
  id: number
  provider_id: number
  external_key: string
  billing_cycle: {
    id: number
    external_key: string
    name: string
    created_at?: string
    updated_at?: string
  }
  billing_cycle_id: number
  billing_day: number
  billing_mode: {
    id: number
    external_key: string
    name: string
    created_at?: string
    updated_at?: string
  }
  billing_mode_id: number
}

export interface IProvider {
  external_key: string
  address: string
  name: string
  short_name: string
  type: string
  email: string
  phone: string
  website: string
  tutorial_completed: boolean
  billing: { intervals: Array<IPaymentIntervals>; settings: IBillingSettings }
  monthly_billing: IBillingSettings
  billing_services: { id: number; name: string }
  coupons: boolean
  currency: { abbr: string; symbol: string }
  currency_code: string
  external_financing: boolean
  family_member_special_requirements: boolean
  read_terms_and_conditions_mandatory: boolean
  language: string
  timezone: { id: number; name: string; created_at: string; updated_at: string }
  social_links?: string
  agreement?: any
  legal_entity_address?: string
  legal_entity_email?: string
  legal_entity_name?: string
  legal_entity_personal_code?: string
  legal_entity_phone?: string
  legal_entity_postal_code?: string
  logo?: string
}

export interface IGroupDaysSchedule {
  day: string
  duration: number
  start_time: string
  end_time: string
}

export interface IGroup {
  sku_code: string
  id: number
  external_key: string
  name: string
  full_name: string
  activity: IActivity
  age_group_type: string
  age_groups: Array<Number>
  categories: Array<string>
  difficulty_type: IDifficultyType
  group_days_schedule: Array<IGroupDaysSchedule>
  group_status: string
  image: string
  is_started: boolean
  is_virtual: boolean
  attendees: number
  active_attendees: number
  capacity: number
  min_start_places: number
  location: ILocation
  payment_intervals: IPaymentIntervals
  one_time_price: number
  price: number
  product: { id: number; provider_id: number; type: string }
  provider: IProvider
  rating: number
  reviews: number
  schedule_count: number
  start_date: string
  end_date: string
}
