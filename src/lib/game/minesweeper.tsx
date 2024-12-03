"use client";

import { useEffect, useState } from "react";
import { Button, Icon, SwitchField } from "@dev-spendesk/grapes";

import { classNames } from "@/lib/classNames";

import { Confetti } from "./confetti";

import "./minesweeper.css";

const SIZE = 9;
const NUMBER_OF_BOMBS = 10;

function generateBombs(cellNumber: string): Set<string> {
  const randomNumberArray = new Set<string>();
  do {
    const randomX = Math.floor(SIZE * Math.random());
    const randomY = Math.floor(SIZE * Math.random());
    const bombCellNumber = `${randomX}|${randomY}`;
    if (bombCellNumber !== cellNumber) {
      randomNumberArray.add(`${randomX}|${randomY}`);
    }
  } while (randomNumberArray.size < NUMBER_OF_BOMBS);
  return randomNumberArray;
}

function generateCellContent(grid: number[][], x: number, y: number): number {
  let sum = 0;
  // Same line
  if (y > 0 && grid[x][y - 1] < 0) {
    sum++;
  }
  if (y < SIZE - 1 && grid[x][y + 1] < 0) {
    sum++;
  }
  // Above
  if (x > 0 && y > 0 && grid[x - 1][y - 1] < 0) {
    sum++;
  }
  if (x > 0 && grid[x - 1][y] < 0) {
    sum++;
  }
  if (x > 0 && y < SIZE - 1 && grid[x - 1][y + 1] < 0) {
    sum++;
  }
  // Below
  if (x < SIZE - 1 && y > 0 && grid[x + 1][y - 1] < 0) {
    sum++;
  }
  if (x < SIZE - 1 && grid[x + 1][y] < 0) {
    sum++;
  }
  if (x < SIZE - 1 && y < SIZE - 1 && grid[x + 1][y + 1] < 0) {
    sum++;
  }
  return sum;
}

function initializeGrid() {
  const grid: number[][] = Array.from({ length: SIZE }, () => []);
  for (let i in grid) {
    grid[i] = Array.from({ length: SIZE }, () => 0);
  }
  return grid;
}

function generateGrid(grid: number[][], cellNumber: string): number[][] {
  const bombs = generateBombs(cellNumber);
  bombs.forEach((bomb) => {
    const [x, y] = bomb.split("|");
    grid[+x][+y] = -1;
  });
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (grid[x][y] > -1) {
        grid[x][y] = generateCellContent(grid, x, y);
      }
    }
  }
  return grid;
}

function displayEmptyCells(
  visibleCells: Set<string>,
  grid: number[][],
  x: number,
  y: number,
) {
  const cellNumber = `${x}|${y}`;
  if (!visibleCells.has(cellNumber)) {
    visibleCells.add(cellNumber);
    if (grid[x][y] === 0) {
      displayEmptyCellsRecursive(visibleCells, grid, x, y);
    }
  }
}

function displayEmptyCellsRecursive(
  visibleCells: Set<string>,
  grid: number[][],
  x: number,
  y: number,
) {
  if (y > 0 && grid[x][y - 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x, y - 1);
  }
  if (y < SIZE - 1 && grid[x][y + 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x, y + 1);
  }
  if (x > 0 && y > 0 && grid[x - 1][y - 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x - 1, y - 1);
  }
  if (x > 0 && grid[x - 1][y] >= 0) {
    displayEmptyCells(visibleCells, grid, x - 1, y);
  }
  if (x > 0 && y < SIZE - 1 && grid[x - 1][y + 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x - 1, y + 1);
  }
  if (x < SIZE - 1 && y > 0 && grid[x + 1][y - 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x + 1, y - 1);
  }
  if (x < SIZE - 1 && grid[x + 1][y] >= 0) {
    displayEmptyCells(visibleCells, grid, x + 1, y);
  }
  if (x < SIZE - 1 && y < SIZE - 1 && grid[x + 1][y + 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x + 1, y + 1);
  }
  return visibleCells;
}

export function Minesweeper() {
  const [grid, setGrid] = useState<number[][]>(initializeGrid());
  const [isSettingFlag, setIsSettingFlag] = useState(false);
  const [flags, setFlags] = useState<Set<string>>(new Set<string>());
  const [visibleCells, setVisibleCells] = useState<Set<string>>(
    new Set<string>(),
  );
  const [areAllCellsVisible, setAreAllCellsVisible] = useState(false);
  const [status, setStatus] = useState<"won" | "lost">();

  useEffect(() => {
    if (visibleCells.size === SIZE ** 2 - NUMBER_OF_BOMBS) {
      setAreAllCellsVisible(true);
      setStatus("won");
    }
  }, [visibleCells]);

  function handleOnCellClick(x: number, y: number, isCellVisible: boolean) {
    const cellNumber = `${x}|${y}`;

    if (visibleCells.size === 0) {
      setGrid(generateGrid(grid, cellNumber));
    }

    if (isSettingFlag && !isCellVisible) {
      setFlags((previous) => {
        const newSet = new Set(previous);
        if (newSet.has(cellNumber)) {
          newSet.delete(cellNumber);
        } else {
          newSet.add(cellNumber);
        }
        return new Set(newSet);
      });
      return;
    }
    if (flags.has(cellNumber)) {
      return;
    }
    if (grid[x][y] === -1) {
      setAreAllCellsVisible(true);
      setStatus("lost");
    } else if (grid[x][y] === 0) {
      setVisibleCells(
        displayEmptyCellsRecursive(
          new Set(visibleCells.add(cellNumber)),
          grid,
          x,
          y,
        ),
      );
    } else {
      setVisibleCells((previous) => new Set(previous.add(cellNumber)));
    }
  }

  function reset() {
    setGrid(initializeGrid());
    setVisibleCells(new Set<string>());
    setFlags(new Set<string>());
    setAreAllCellsVisible(false);
    setStatus(undefined);
  }

  return (
    <div className="body-m text-center">
      <div className="border border-solid border-border-default">
        {grid.map((row, x) => (
          <div className="flex" key={x}>
            {row.map((_, y) => {
              const cellNumber = `${x}|${y}`;
              const isCellVisible =
                areAllCellsVisible || visibleCells.has(cellNumber);
              return (
                <div
                  className={classNames(
                    "cell",
                    grid[x][y] === -1 && "bomb",
                    grid[x][y] === 0 && "empty",
                    isCellVisible && "visible",
                    isCellVisible &&
                      grid[x][y] === 1 &&
                      "bg-background-secondary-info-default",
                    isCellVisible &&
                      grid[x][y] === 2 &&
                      "bg-background-secondary-success-default",
                    isCellVisible &&
                      grid[x][y] === 3 &&
                      "bg-background-secondary-alert-default",
                    isCellVisible &&
                      grid[x][y] === 4 &&
                      "bg-background-secondary-brand-default",
                    !isCellVisible && flags.has(cellNumber) && "cell-flag",
                  )}
                  key={`${x}|${y}`}
                  onClick={() => handleOnCellClick(x, y, isCellVisible)}
                >
                  {grid[x][y] > 0 && isCellVisible && grid[x][y]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex gap-8 mt-8 items-center justify-between">
        <SwitchField
          isChecked={isSettingFlag}
          onChange={() => setIsSettingFlag(!isSettingFlag)}
          label={
            <div className="flex gap-4 items-center">
              <Icon name="racing-flag" />
              Flag
            </div>
          }
        />
        <Button
          id="restart"
          variant="tertiaryNeutral"
          onClick={reset}
          text="Restart"
        />
      </div>
      {status === "won" && <Confetti />}
    </div>
  );
}
