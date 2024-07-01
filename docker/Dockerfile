FROM ruby:3.2.3

ENV LANG C.UTF-8 \
    TZ Asia/Tokyo

WORKDIR /app

COPY Gemfile \
     Gemfile.lock \
     /app/

RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       sqlite3 \
                       libsqlite3-dev \
                       postgresql-client \
                       nodejs \
                       imagemagick \
                       less && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN bundle install --jobs=4

# https://github.com/bundler/bundler/issues/6154
ENV BUNDLE_GEMFILE='/app/Gemfile'