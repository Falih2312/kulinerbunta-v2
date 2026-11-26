-- Skema Database Supabase untuk KulinerBunta.id
CREATE TABLE IF NOT EXISTS kb_merchants (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  owner TEXT NOT NULL,
  wa TEXT NOT NULL,
  category TEXT,
  address TEXT,
  status TEXT DEFAULT 'PENDING',
  note TEXT DEFAULT '',
  docs JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS kb_menus (
  id TEXT PRIMARY KEY,
  merchant_id TEXT REFERENCES kb_merchants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT,
  price BIGINT NOT NULL,
  description TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS kb_orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_wa TEXT NOT NULL,
  address TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  merchant_id TEXT REFERENCES kb_merchants(id),
  courier_id TEXT,
  status TEXT DEFAULT 'Menunggu Konfirmasi',
  items JSONB DEFAULT '[]'::jsonb,
  subtotal BIGINT DEFAULT 0,
  delivery_fee BIGINT DEFAULT 5000,
  service_fee BIGINT DEFAULT 1000,
  total BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE kb_merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE kb_menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE kb_orders ENABLE ROW LEVEL SECURITY;
