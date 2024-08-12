CREATE TABLE public.keywords
(
    keyword_id serial NOT NULL,
    login_id integer NOT NULL,
    keywords character varying(100) NOT NULL,
    PRIMARY KEY (keyword_id),
    data_source character varying(50),
);

ALTER TABLE IF EXISTS public.keywords
    OWNER to postgres;
	ADD COLUMN last_updated timestamp without time zone NOT NULL DEFAULT now();