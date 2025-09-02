import { useEvents } from "@/hooks/redux";
import { fetchEvents, setFilters } from "@/store/eventsSlice";
import { SearchFilters } from "@/types";
import React, { useState } from "react";
import c from "./Filters.module.css";

export const Filters = () => {
  const { filters, dispatch } = useEvents();
  const [localFilters, setLocalFilters] = useState<SearchFilters>(filters);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInput = (field: keyof SearchFilters, value: string) => {
    setLocalFilters((p) => ({
      ...p,
      [field]: value || undefined,
    }));
  };

  const applyFilters = (newFilters: SearchFilters) => {
    console.log("Applying filters:", newFilters);
    dispatch(setFilters(newFilters));
    dispatch(fetchEvents({ page: 0, filters: newFilters }));
  };

  const handleApplyFilters = () => {
    applyFilters(localFilters);
  };

  const handleClearFilters = () => {
    const emptyFilters: SearchFilters = {};
    setLocalFilters(emptyFilters);
    applyFilters(emptyFilters);
  };

  const hasActiveFilters =
    localFilters.keyword ||
    localFilters.city ||
    localFilters.startDate ||
    localFilters.endDate ||
    localFilters.category;

  return (
    <div className={c.filtersContainer}>
      <div
        className={c.filtersHeader}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={c.headerContent}>
          <h3 className={c.filtersTitle}>Filters</h3>
          {hasActiveFilters && (
            <span className={c.activeIndicator}>
              {
                Object.keys(localFilters).filter(
                  (key) => localFilters[key as keyof SearchFilters]
                ).length
              }
            </span>
          )}
        </div>
        <button className={c.toggleButton} type="button">
          <span
            className={`${c.chevron} ${
              isExpanded ? c.chevronUp : c.chevronDown
            }`}
          >
            ↓
          </span>
        </button>
      </div>

      <div
        className={`${c.filtersContent} ${
          isExpanded ? c.expanded : c.collapsed
        }`}
      >
        <div className={c.filtersGrid}>
          <div className={c.filterGroup}>
            <label className={c.filterLabel}>Search</label>
            <input
              type="text"
              className={c.filterInput}
              value={localFilters.keyword || ""}
              onChange={(e) => handleInput("keyword", e.target.value)}
              placeholder="Search events..."
            />
          </div>

          <div className={c.filterGroup}>
            <label className={c.filterLabel}>City</label>
            <input
              type="text"
              className={c.filterInput}
              value={localFilters.city || ""}
              onChange={(e) => handleInput("city", e.target.value)}
              placeholder="Enter city"
            />
          </div>

          <div className={c.filterGroup}>
            <label className={c.filterLabel}>Category</label>
            <input
              type="text"
              className={c.filterInput}
              value={localFilters.category || ""}
              onChange={(e) => handleInput("category", e.target.value)}
              placeholder="Music, Sports..."
            />
          </div>

          <div className={c.dateGroup}>
            <label className={c.filterLabel}>Date Range</label>
            <div className={c.dateInputs}>
              <input
                type="date"
                className={c.dateInput}
                value={localFilters.startDate || ""}
                onChange={(e) => handleInput("startDate", e.target.value)}
                placeholder="Start date"
              />
              <span className={c.dateSeparator}>to</span>
              <input
                type="date"
                className={c.dateInput}
                value={localFilters.endDate || ""}
                onChange={(e) => handleInput("endDate", e.target.value)}
                placeholder="End date"
              />
            </div>
          </div>
        </div>

        <div className={c.filtersActions}>
          <button
            className={c.clearButton}
            onClick={handleClearFilters}
            type="button"
            disabled={!hasActiveFilters}
          >
            Clear
          </button>
          <button
            className={c.applyButton}
            onClick={handleApplyFilters}
            type="button"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
